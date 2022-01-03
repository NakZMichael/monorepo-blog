import { Grid} from "@mui/material";
import { SxProps,Theme } from "@mui/material";
import Link from "next/link";
import { CardProps,Card } from "../card/card";

/* eslint-disable-next-line */
export interface CardCollectionProps {
  cards:(CardProps &{link?:string})[],
  className?:string,
  sx?:SxProps<Theme>,
}

export function CardCollection(props: CardCollectionProps) {
  return (
    <Grid 
      className={props.className}
      sx={props.sx}
      container spacing={2} 
      justifyContent="center" 
    >
      {props.cards.map(card=>{
        if(card.link){
          return (
            <Grid 
              key={card.title} 
              item 
              style={{ display: 'flex',
                justifyContent: 'center',}}
              xs={12} 
              sm={6} 
              lg={4} 
            >
              <Link 
                href={card.link}
                passHref
              >
              <a href={card.link}>
                  <Card {...card} />
                </a>
              </Link>
            </Grid>
          )
        }
        return(
          <Grid 
            item 
            style={{ display: 'flex',
              justifyContent: 'center',}}
            xs={12} 
            sm={6} 
            lg={4} 
            key={card.title} 
          >
            <Card {...card} />
          </Grid>
        )
      }
      )}
    </Grid>
  );
}

export default CardCollection;
