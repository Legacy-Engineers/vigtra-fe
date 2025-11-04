import { fetchGraphql } from '../core/services';
import type { InsureeGqlItem, InsureeGqlSearchForm } from './types';

export async function fetchInsurees(searchForm: InsureeGqlSearchForm) {
  const after = searchForm.after ? `"${searchForm.after}"` : null;
  const before = searchForm.before ? `"${searchForm.before}"` : null;
  const query = `
    {
      insurees(
        first: ${searchForm.first || 10},
        ${after ? `after: ${after},` : ''}
        ${before ? `before: ${before},` : ''}
        chfId: "${searchForm.chfId || ''}"
      ) {
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            id
            uuid
            fullName
            chfId
            dob
            email
            age
            isAdult
            genderName
            currentAddress
            location {
              id
              name
            }
            phone
          }
        }
      }
    }
  `;
  const data = await fetchGraphql(query);
  return {
    data: data.data.insurees.edges.map((edge: { node: InsureeGqlItem }) => edge.node),
    pageInfo: data.data.insurees.pageInfo
  };
}

export async function fetchInsureeDetail(uuid: string) {
  const query = `
    {
    insuree(uuid: "${uuid}") {
     id,
      uuid,
      fullName,
      chfId,
          lastName,
    otherNames,
      dob,
      email,
      age,
      isAdult,
      genderName,
      currentAddress,
      location {
        id,
        name,
        type {
          id,
          name,
          level
        }
      },
      phone,
      secondaryHealthFacility {
        id,
        name,
      },
      healthFacility {
        id,
        name,
      },
      otherHealthFacilities(first: 10) {
        edges{
          node{
            id,
            name,
            code
          }
        }
      },
      familyMemberships(first: 10) {
        edges{
          node{
            familyName
          }
        }
      },
      status,
      statusDate,
      createdDate,
      lastModified,
      offline,
      cardIssued,
      cardIssuedDate,
      identificationNumber,
      photo,
      photo,
      maritalStatus,
      passport,
      professionName,
      validityFrom,
      validityTo,
      jsonExt,
      status,
      statusDate,
      createdDate,
      lastModified,
        identifications {
          id,
          uuid,
          identificationNumber,
          identificationType {
            id
            name
            code
          }
      }
    }
  }
  `;
  const data = await fetchGraphql(query);
  return data.data.insuree as InsureeGqlItem | null;
}