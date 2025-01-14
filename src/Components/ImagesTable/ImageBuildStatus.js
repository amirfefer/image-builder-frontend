import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from '@patternfly/react-core';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InProgressIcon,
  OffIcon,
  PendingIcon,
} from '@patternfly/react-icons';

import './ImageBuildStatus.scss';

const ImageBuildStatus = (props) => {
  const messages = {
    success: [
      {
        icon: <CheckCircleIcon className="success" />,
        text: 'Ready',
      },
    ],
    failure: [
      {
        icon: <ExclamationCircleIcon className="error" />,
        text: 'Image build failed',
      },
    ],
    pending: [
      {
        icon: <PendingIcon />,
        text: 'Image build is pending',
      },
    ],
    // Keep "running" for backward compatibility
    running: [
      {
        icon: <InProgressIcon className="pending" />,
        text: 'Image build in progress',
      },
    ],
    building: [
      {
        icon: <InProgressIcon className="pending" />,
        text: 'Image build in progress',
      },
    ],
    uploading: [
      {
        icon: <InProgressIcon className="pending" />,
        text: 'Image upload in progress',
      },
    ],
    registering: [
      {
        icon: <InProgressIcon className="pending" />,
        text: 'Cloud registration in progress',
      },
    ],
    expiring: [
      {
        icon: <ExclamationTriangleIcon className="expiring" />,
        text: `Expires in ${props.remainingHours} ${
          props.remainingHours > 1 ? 'hours' : 'hour'
        }`,
      },
    ],
    expired: [
      {
        icon: <OffIcon />,
        text: 'Expired',
      },
    ],
  };
  return (
    <React.Fragment>
      {messages[props.status] &&
        messages[props.status].map((message, key) => (
          <Flex key={key} className="pf-u-align-items-baseline pf-m-nowrap">
            <div className="pf-u-mr-sm">{message.icon}</div>
            {message.text}
          </Flex>
        ))}
    </React.Fragment>
  );
};

ImageBuildStatus.propTypes = {
  status: PropTypes.string,
  remainingHours: PropTypes.number,
};

export default ImageBuildStatus;
