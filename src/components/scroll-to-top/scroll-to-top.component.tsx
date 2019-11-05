import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

type ScrollToTopProps = RouteComponentProps & {
  children: React.ReactNode
}

const ScrollToTop = ({ location: { pathname }, children }: ScrollToTopProps) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default withRouter(ScrollToTop);
