export async function fetchGraphql(
  query: string,
  variables: Record<string, any> = {},
) {
  try {
    const response = await fetch('/api/graphql/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add Authorization or CSRF headers here if needed
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(JSON.stringify(data));
    }

    return {
      success: true,
      data: data.data,
      message: 'Data retrieved successfully',
      error_detail: [],
    };
  } catch (err) {
    console.error('GraphQL Error:', err);
    return {
      success: false,
      data: {},
      message: 'Failed to retrieve data',
      error_detail: [err],
    };
  }
}
