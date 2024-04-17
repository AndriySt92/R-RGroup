export const calcTotalPages = (totalItems, pageSize ) => {
    return Math.ceil(totalItems / pageSize)
  }