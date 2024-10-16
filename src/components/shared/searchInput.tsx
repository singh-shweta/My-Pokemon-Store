import { borderRadius } from '@mui/system';
import React, { useCallback, useState } from 'react';
import { createUseStyles } from 'react-jss';
import sharedStyles from '../../shared/sharedStyles';

interface SearchProps {
    onSearchInput: Function; 
  }

export const SearchInput: React.FC<SearchProps> = ({onSearchInput}) => {
  const classes = useStyles();
  const [searchInput, setSearchText] = useState('');
  
  const handleInputChange = useCallback((e) => {
    setSearchText(e.target.value);
    onSearchInput(e.target.value)
  },[onSearchInput]);
  
    return (<div className={classes.row}>
        <div className={`${classes.col} ${classes.centerText}`}>
        <input 
            type="text"
            placeholder="Search By Name..."
            value={searchInput}
            onChange={handleInputChange}
            className={classes.search}
        />
        </div>
    
    </div>
    
  );
};

const useStyles = createUseStyles(
  {
    search: {
        width: '80%',
        height: '60px',
        color: 'black',
        fontSize: '16px',
        borderRadius: '8px',
        padding: '0px 10px 0px 10px',
        '&:focus': {
          borderColor: '#4A90E2',
        },
      },
      ...sharedStyles
  },
  { name: 'ListCard' }
)