export const CREAT_TODO= 'CREAT_TODO';
export const createtodo= Text =>({
    type: CREAT_TODO,
    payload: {Text},

});

export const REMOVE_TODO ='REMOVE_TODO';
export const removetodo= Text =>({
    type: REMOVE_TODO,
    payload: {Text},

});
//createtodo("New Todo Create");