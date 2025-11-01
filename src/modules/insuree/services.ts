import { fetchGraphql } from '../core/services';

export async function fetchInsurees() {
  const query = `
    {
    insurees(first: 10){
      edges{
        node{
          uuid,
          lastName,
          otherNames
        }
      }
    }
    }
    `;
  const data = await fetchGraphql(query);

  return data;
}
