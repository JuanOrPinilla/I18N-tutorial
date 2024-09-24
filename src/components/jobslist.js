import React, { useState } from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";
import './styles.css'; // Ajusta la ruta si es necesario

const JobsList = () => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      views: 1250,
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      views: 34000,
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      views: 540,
    },
  ]);

  const isSpanish = navigator.language.startsWith('es');

  return (
    <div>
      <table className="table">
        <thead className={isSpanish ? "thead-light" : "thead-dark"}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id="Position" defaultMessage="Position" />
            </th>
            <th scope="col">
              <FormattedMessage id="Company" defaultMessage="Company" />
            </th>
            <th scope="col">
              <FormattedMessage id="Salary" defaultMessage="Salary" />
            </th>
            <th scope="col">
              <FormattedMessage id="City" defaultMessage="City" />
            </th>
            <th scope="col">
              <FormattedMessage id="PublicationDate" defaultMessage="Publication date" />
            </th>
            <th scope="col">
              <FormattedMessage id="Views" defaultMessage="Visits" />
            </th>
          </tr>
          
        </thead>
        <tbody>
          {offers.map((offer, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{offer.name}</td>
              <td>{offer.company}</td>
              <td>
                <FormattedMessage
                  id="salaryMillion"
                  defaultMessage="{salary} {unit}"
                  values={{
                    salary: offer.salary,
                    unit: <FormattedMessage id="million" defaultMessage="million" />

                  }}
                />
              </td>
              <td>{offer.city}</td>
              <td>{offer.date}</td>
              <td>
                <FormattedNumber value={offer.views} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;

