import React from 'react';
import { createUseStyles } from 'react-jss';
import sharedStyles from '../../shared/sharedStyles';

interface DataProps {
  [key: string]: any;
}
interface CardProps {
    data: DataProps; 
    idField: string;
    onItemClick: Function;
  }

export const ListCard: React.FC<CardProps> = ({data={}, idField, onItemClick}) => {
  const classes = useStyles();
  return (
          <div
            key={data[idField]}
            className={`${classes.col} ${classes.col3} ${classes.card}`}
            onClick={() => onItemClick(data)}
          >
              <div className={classes.row}>
                  <div className={`${classes.col} ${classes.col4} ${classes.imageCol}`} >
                      <img src={data.image} className={classes.image}></img>
                  </div>
                  <div className={`${classes.col} ${classes.col4}`} >
                      <p>
                        <h2>
                          <span>{data.name}</span>
                        </h2>
                        {data.number} 
                      </p>
                      
                      <br></br>
                      <b>Types: &nbsp;</b> 
                      <i>{data.types.join(", ")}</i>

                  </div>
              </div>
              
          </div>
  );
};

const useStyles = createUseStyles(
  {
    card: {
      backgroundColor: 'white',
        // backgroundColor: '#ABCECB',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        margin: '15px',
        transition: 'transform 0.2s, box-shadow 0.2s',
        color:'#ececec',
        '&:hover': {
          transform: 'scale(1.1)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          zIndex: '2',
          textAlign: 'center',
          borderRadius: '8px',
          cursor: 'pointer'
        },
        '& *': {
          color: '#323434',  // This targets all child elements to ensure they inherit the text color
        },
        
      },
      imageCol: {
        width: '100px',         // Makes the image fill the width of the column
        height: '100px', 
      },
      image: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        objectPosition:'center',
        borderRadius: '50%' 
    },
      ...sharedStyles
  },
  { name: 'ListCard' }
)