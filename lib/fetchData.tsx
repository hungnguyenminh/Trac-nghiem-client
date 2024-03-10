const fetchDataAuthen = async ({ url, method = 'post', body, token }: any) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  if (token && token?.length > 0) {
    headers.append('Authorization', `Bearer ${token}`);
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API}/${url}`, {
    method: method,
    body: body,
    // mode: 'cors',
    headers: headers,
  });

  if (!res.ok) {
    return res.text().then((text) => {
      // return null;
      throw new Error(text);
    });
  }
  return res.json();
};

export { fetchDataAuthen };
