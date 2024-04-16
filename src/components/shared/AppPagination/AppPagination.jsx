import React from 'react';
import { useTheme } from '@mui/material/styles';
import { usePagination } from '@mui/material';
import { styled } from '@mui/system';

const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: '12px',
});

const ItemContainer = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

const StyledButton = styled('button')(({ theme, selected }) => ({
    border: 'none',
    backgroundColor: selected ? theme.palette.primary.main : 'inherit',
    color: selected ? 'white' : 'rgba(0, 0, 0, 0.87)',
    margin: theme.spacing(0.5),
    minWidth: 32,
    height: 32,
    padding: '6px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#2a6a85',

    },
    '&:disabled': {
        color: 'rgba(0, 0, 0, 0.26)',
        backgroundColor: '#fafafa',
    }
}));

const TextStyledButton = styled('button')(({ theme, selected }) => ({
    border: '1px solid #F1F1F1',
    backgroundColor: '#F1F1F1',
    padding: '6px 20px',
    borderRadius: '8px',
    color: selected ? 'white' : 'rgba(0, 0, 0, 0.87)',
    margin: theme.spacing(0.5),

    // width: '63px',
    minWidth: 32,
    height: 32,
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#2a6a85',
    },
    '&:disabled': {
        color: 'rgba(0, 0, 0, 0.26)',
        backgroundColor: '#fafafa',
        display: 'none',
    }
}));

const AppPagination = ({ currentPage, onPageChange, count, pageSize }) => {
    const theme = useTheme();
    const numOfPages = Math.ceil(count / pageSize);

    const { items } = usePagination({
        count: numOfPages,
        page: currentPage,
        siblingCount: 1,
        boundaryCount: count,

    });


    return (
        <ItemContainer sx={{ gap: 3 }}>
            <TextStyledButton
                type="button"
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
            >
                Previous
            </TextStyledButton>

            <List>
                {items.map(({ page, type, selected, ...item }, index) => {
                    if (type === 'previous' || type === 'next') { // skip prev and next buttons
                        return null;
                    }

                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        return (
                            <li key={index}>
                                <span>…</span>
                            </li>
                        );
                    } else {
                        return (
                            <li key={index}>
                                <StyledButton
                                    type="button"
                                    selected={selected}
                                    onClick={() => onPageChange(page)}
                                // {...item}
                                >
                                    {page}
                                </StyledButton>
                            </li>
                        );
                    }
                })}
            </List>

            <TextStyledButton
                type="button"
                onClick={() => onPageChange(Math.min(count, currentPage + 1))}
                disabled={currentPage === numOfPages}
            >
                Next
            </TextStyledButton>
        </ItemContainer>
    );
};

export default AppPagination;
