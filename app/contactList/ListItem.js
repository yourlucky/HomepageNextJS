'use client';

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((a, i) => (
        <div className='p-5' key={i}>
          <div>E-mail : {result[i].email}</div>
          <div>Phone : {result[i].phone}</div>
          <div>
            name : {result[i].first} {result[i].last}
          </div>
          <div> * Message </div>
          <div>{result[i].message}</div>
        </div>
      ))}
    </div>
  );
}
