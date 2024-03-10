export const formatDate = (date: Date) => {
  const dateConvert = new Date(date);

  // Get year, month (0-indexed), and day
  const year = dateConvert.getFullYear();
  const month = String(dateConvert.getMonth() + 1).padStart(2, '0'); // Add leading zero for single-digit months
  const day = String(dateConvert.getDate()).padStart(2, '0'); // Add leading zero for single-digit days

  // Format the date in DD/MM/YYYY
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};
