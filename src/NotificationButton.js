import React from 'react';
import { askForPermissioToReceiveNotifications } from './push-notification';

const NotificationButton = () => (
    <button onClick={askForPermissioToReceiveNotifications} >Click here to receive notifications</button>
);

export default NotificationButton;
