interface User {
  id: number;
  firstName: string;
  lastName: string;
}
function fullName(user: User) {
  console.log(`${user.firstName} ${user.lastName}`);
}
const userDetail: User = {
  id: 1,
  firstName: 'Awais',
  lastName: 'Ahmad',
};
fullName(userDetail);
