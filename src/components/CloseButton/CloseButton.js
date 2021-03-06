/**
 * Copyright 2019, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { svgKilo } from '../../styles/style-helpers';
import IconButton from '../IconButton';
import { ReactComponent as CloseIcon } from './close-icon.svg';

const StyledIconButton = styled(IconButton)(
  ({ theme }) => css`
    label: close-button;
    ${svgKilo({ theme })};
  `
);

/**
 * A generic close button.
 */
const CloseButton = props => (
  <StyledIconButton {...props}>
    <CloseIcon />
  </StyledIconButton>
);

CloseButton.propTypes = {
  /**
   * Text label for screen readers. Important for accessibility.
   */
  label: PropTypes.string
};

CloseButton.defaultProps = {
  label: 'Close'
};

/**
 * @component
 */
export default CloseButton;
