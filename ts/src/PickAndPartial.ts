interface User {
    name: string,
    email: string,
    age: number,
    address: string,
}

type UpdateProps = Pick<User, 'name' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps>

function updateUserData(props: UpdatePropsOptional) {

}

updateUserData({
    email: 'deepak',
})
