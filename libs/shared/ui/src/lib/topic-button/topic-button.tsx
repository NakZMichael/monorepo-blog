import {css} from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useState } from 'react';

type ImageProps = {
  src: string
  width: number
}

export interface TopicButtonProps {
  topicName: string;
  onClick?: (topicName: string) => void;
}

const containerStyle = css({
  backgroundColor: 'white',
  paddingLeft: '1rem',
  borderRadius: '0.5rem',
  display:'flex',
  boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  maxWidth:'28rem',
  minWidth: 'min-content',
  ':hover':{
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
  },
  transitionProperty: 'box-shadow',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',
})

const imageStyle = css({
  width:'3rem'
})

const topicNameContainerStyle = css({
  paddingLeft:'1.25rem'
})

const topicNameStyle = css`
font-weight: 700;
font-size: 2.25rem;
line-height: 2.5rem;
`

export function TopicButton(props: TopicButtonProps) {
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const cleanedSvgName = props.topicName
        .replace(/[^a-zA-Z0-9]/g, '')
        .toLocaleLowerCase();
      const topicSvgIcon = await import(`./images/${cleanedSvgName}.svg`);
      setIcon(topicSvgIcon.default);
    };
    fetchData();
  }, [props.topicName]);

  const onClickHandler = () => {
    if (props.onClick) {
      props.onClick(props.topicName);
    } else {
      console.warn(
        `no click handler defined on topic button with topic ${props.topicName}`
      );
    }
  };

  return (
    <div
      css={containerStyle}
      data-testid="topicButton"
      onClick={onClickHandler}
    >
      <img src={icon} alt="" css={imageStyle} />
      <div css={topicNameContainerStyle}>
        <h2 css={topicNameStyle} data-testid="topicName">
          {props.topicName}
        </h2>
      </div>
    </div>
  );
}

export default TopicButton;

