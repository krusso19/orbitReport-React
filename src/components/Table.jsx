const Table = ({ sat }) => { //task 5
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th> {/*from task 5*/}
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Orbit Type</th>
       <th>Status</th>
     </tr>
     </thead>
      <tbody>
      {/*based off of Button.jsx data. did not autopopulate and the table is not showing up. I'm getting a white space error and two children with the same key
      It works! Kinda. data.type is undefined. But strings show up and it properly is tracking which sats should show up when I click the buttons*/}
        {sat.map((data, id) => {
          return (
            <tr key={id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>{data.orbitType}</td>
              <td>{data.operational ? 'Active' : 'Inactive'}</td> {/* React Part 2, conditional rendering */}
            </tr>
          );
        })}
      </tbody>     
   </table>
  );
};

export default Table;

{/*the code I would include for status
  {data.operational ? 'active' : "inactive"}
  But where does this go in the table? or do I need it to return something?
  */}