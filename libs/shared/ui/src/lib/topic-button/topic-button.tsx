import {Box, css, Typography} from '@mui/material';
import { blue, indigo } from '@mui/material/colors';
import { useEffect } from 'react';
import { useState } from 'react';

type ImageProps = {
  src: string;
  width: number;
}

export interface TopicButtonProps {
  topicName: string;
  onClick?: (topicName: string) => void;
  className?:string;
}

export function TopicButton(props: TopicButtonProps) {
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const cleanedSvgName = props.topicName
        .replace(/[^a-zA-Z0-9]/g, '')
        .toLocaleLowerCase();
      try{
        const topicSvgIcon = await import(`./images/${cleanedSvgName}.svg`);
        // WARN: storybookではtopicSvgIcon.defaultがstringだが
        // next.jsではtopicSvgIcon.default.srcになっている。
        // dynamic importの仕様を詳しく調べる必要あり
        if(typeof topicSvgIcon.default === 'string'){
          setIcon(topicSvgIcon.default);
        }else if(typeof topicSvgIcon.default.src === 'string'){
          setIcon(topicSvgIcon.default.src);
        }
      }catch{
        setIcon('')
      }
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
    <Box
      className={props.className}
      data-testid="topicButton"
      sx={{
        backgroundColor: theme=>theme.palette.mode === 'dark'?indigo[700]:theme.palette.common.white,
        height:'2.25rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        width:'fit-content',
        borderRadius: '1.125rem / 50% 50% 50% 50%',
        display:'flex',
        alignContent:'center',
        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        maxWidth:'10rem',
        minWidth: 'min-content',
        ':hover':{
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
        },
        transitionProperty: 'box-shadow',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '150ms',
        cursor:'pointer',
      }}
      onClick={onClickHandler}
    >
      {icon && <img src={icon} alt="" css={imageStyle} /> }
      <div css={topicNameContainerStyle}>
        <Typography
          data-testid="topicName"
          sx={{
            fontWeight: 700,
            fontSize: '1rem',
            // display:'block',
            lineHeight:'1rem',
            margin:0,
          }}
        >
          {props.topicName}
        </Typography>
      </div>
    </Box>
  );
}

const imageStyle = css({
  width:'2rem',
  paddingRight:'1rem'
})

const topicNameContainerStyle = css({
  // paddingLeft:'1rem',
  // paddingRight: '1rem',
  display:'flex',
  alignItems:'center',
})

export default TopicButton;

