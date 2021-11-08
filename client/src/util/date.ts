const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function getLongDate(ts: string) {
  const time = new Date(ts);
  return `${time.getDate()} ${monthNames[time.getMonth()]} ${time.getFullYear()}`;
}

export function getShortDate(ts: string) {
  const time = new Date(ts);
  return `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`;
}
