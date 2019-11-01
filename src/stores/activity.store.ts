import { observable, action, computed, configure, runInAction } from 'mobx';
import { createContext, SyntheticEvent } from 'react';
import agent from '../api/agent';
import { IActivity } from '../models/activity';

configure({ enforceActions: "always" });

class ActivityStore {
  @observable activityRegistry = new Map();
  @observable activities: IActivity[] = [];
  @observable selectedActivity: IActivity | undefined;
  @observable loadingInitial: boolean = false;
  @observable editMode: boolean = false;
  @observable submiting: boolean = false;
  @observable target: string = '';

  @computed get activitiesByDate() {
    return Array.from(this.activityRegistry.values())
      .sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
  }

  @action loadActivities = async () => {
    this.loadingInitial = true;
    try {
      const activities = await agent.Activities.list();

      runInAction('loading activities', () => {
        activities.forEach((activity) => {
          this.activityRegistry.set(activity.id, activity);
        });
        this.loadingInitial = false;
      });

    }
    catch (err) {
      console.error(err);
      runInAction('loading activities error', () => {
        this.loadingInitial = false;
      });
    }
  };

  @action createActivity = async (activity: IActivity) => {
    this.submiting = true;
    try {
      await agent.Activities.create(activity);
      runInAction('create activity', () => {
        this.activityRegistry.set(activity.id, activity);
        this.submiting = false;
        this.editMode = false;
      });
    }
    catch (err) {
      console.error(err);
      runInAction('create actyvity error', () => {
        this.submiting = false;
      });
    }
  };

  @action editActivity = async (activity: IActivity) => {
    this.submiting = true;
    try {
      await agent.Activities.update(activity);

      runInAction('edit activity', () => {
        this.activityRegistry.set(activity.id, activity);

        this.selectedActivity = activity;
        this.submiting = false;
        this.editMode = false;
      });
    }
    catch (err) {
      console.error(err);
      runInAction('edit activity error', () => {
        this.submiting = false;
      });
    }
  };

  @action deleteActivity = async (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
    this.submiting = true;
    this.target = event.currentTarget.name;

    try {
      await agent.Activities.delete(id);
      runInAction('delete activity', () => {
        this.activityRegistry.delete(id);

        this.submiting = false;
        this.target = '';
        this.selectedActivity = undefined;
      });
    }
    catch (err) {
      console.error(err);
      runInAction('delete activity error', () => {
        this.submiting = false;
        this.target = '';
      });
    }
  };

  @action selectActivity = (id: string) => {
    this.selectedActivity = this.activityRegistry.get(id);
    this.editMode = false;
  };

  @action openCreateForm = () => {
    this.selectedActivity = undefined;
    this.editMode = true;
  };


  @action cancelSelectedActivity = () => {
    this.selectedActivity = undefined;
  };

  @action cancelOpenForm = () => {
    this.editMode = false;
  };

  @action openEditForm = (id: string) => {
    this.selectedActivity = this.activityRegistry.get(id);
    this.editMode = true;

  };
};

export default createContext(new ActivityStore());