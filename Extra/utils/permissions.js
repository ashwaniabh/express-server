let permissions={
            'getUsers': {
                     all: ['head-trainer'],
                     read : ['trainee', 'trainer'],
                     write : ['trainer'],
                     delete: [],
                    }
    };
  
    
function hasPermission (moduleName,role, permissionType){
    if(permissions.hasOwnProperty(moduleName))
    {
        if(permissions.hasOwnProperty(moduleName) && permissions[moduleName].hasOwnProperty(permissionType) && permissions[moduleName][permissionType].includes(role)){
             console.log(true);
    }
    else console.log(false);
    }}
//console.log(permissions.hasOwnProperty('getUsers'))
//console.log(permissions['getUsers'].hasOwnProperty('read'))
//console.log(permissions['getUsers']['read'].hasOwnProperty('trainee'))
//console.log(permissions['getUsers']['read'].includes('trainee'));
hasPermission("getUsers","trainer","read");