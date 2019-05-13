// eslint-disable
// this is an auto generated file. This will be overwritten

export const getTodo = `query GetTodo($id: ID!) {
  getTODO(id: $id) {
    id
    firstName
    lastName
    employer
    age
    task
    status
  }
}
`;
export const listTodOs = `query ListTodOs(
  $filter: ModelTODOFilterInput
  $limit: Int
  $nextToken: String
) {
  listTODOs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      employer
      age
      task
      status
    }
    nextToken
  }
}
`;
