export function getAccessMenuList() {
    return new Promise(resole => {
        let menuList = [
            {
                path: 'add',
                name: 'addUser',
                component: "add",
                meta: { title: '新增用户' }
            }
        ];
        setTimeout(() => {
            resole(menuList);
        }, 3000);
    });
}
