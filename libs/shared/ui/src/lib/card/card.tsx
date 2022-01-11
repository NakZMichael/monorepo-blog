import React, { useRef } from 'react';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {DateTime} from '../date-time/date-time';
import {TopicButton} from '../topic-button/topic-button'
import { styled, Box, CardMedia } from '@mui/material'
import { motion } from 'framer-motion';

/* eslint-disable-next-line */
export interface CardProps {
  image?:string,
  title:string,
  date?:string,
  tags?:string[]
}

export function Card(props: CardProps) {
  const scrollRef = useRef(null)
  return (
    <motion.div
      initial={{
        opacity: 0,
        x:-300
      }}
      whileInView={{
        opacity: 1,
        x:0
      }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 1,
      }}
      viewport={{ root: scrollRef,once:true }}
      >

      <Root 
        sx={{ 
          minWidth: 280,
          maxWidth:500,
          height: 360,
      }}
      > 
        {props.image &&
          <CardMedia
            component="img"
            image={props.image}
            alt={props.title}
            sx={{
              flexGrow:1,
              minHeight:140,
            }}
          />
        }
        <Content className="accentuation">
          <Title>
            {props.title}
          </Title>
          <TagContainer>
            {props.tags?.map(tag=>(
              <Tag
                key={tag}
                topicName={tag} 
              />
            ))}
          </TagContainer>
          {props.date &&
            <DateView
              dateTime={props.date} 
              variant="body2"
            />
          }
        </Content>
        </Root>
      </motion.div>
  );
}

export default MuiCard;

const Root =styled(MuiCard)(({theme})=>({
  display:'flex',
  flexDirection: 'column',
  borderRadius:'20px'
}))

const Title = styled('h3')(({theme})=>({
  fontWeight:700,
  fontSize:theme.typography.h6.fontSize
}))

const StyledCardMedia = styled(CardMedia)(({theme})=>({
  flexGrow:1,
  minHeight:140,
}))

const Content = styled(CardContent)(({theme})=>({
  '&.accentuation':{
    flexGrow:0,
    minHeight:'fit-content',
    display:'flex',
    flexDirection:'column',
    padding:theme.spacing(2),
  }
}))

const TagContainer = styled(Box)(({theme})=>({
  display:'flex',
  flexWrap:'wrap',
}))

const Tag = styled(TopicButton)(({theme})=>({
  marginRight:theme.spacing(1),
  marginBottom:theme.spacing(1),
}))

const DateView = styled(DateTime)(({theme})=>({
  textAlign:'end',
  flexGrow:1,
  paddingBottom:0,
}))
