export interface IActivity {
  id: string,
  title: string,
  description: string,
  category: string,
  date: Date | null,
  city: string,
  venue: string
};

export class ActivityFormValues implements IActivity {
  id: string = '';
  title: string = '';
  category: string = '';
  description: string = '';
  date: Date | null = null;
  city: string = '';
  venue: string = '';

  constructor(init?: IActivity) {
    Object.assign(this, init);
  }
}