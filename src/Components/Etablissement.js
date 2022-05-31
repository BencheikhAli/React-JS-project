import React from "react";
import { Card, CardContent, CardHeader } from "semantic-ui-react";

const Etablissement = ({ properties }) => {
  console.log(properties);
  const { nom, telephone, email } = properties;
  return (
    <Card>
      <CardContent>
        <CardHeader>{nom}</CardHeader>
        <Card.Meta>Téléphone : {telephone}</Card.Meta>
        {email ? <Card.Meta>Mail : {email}</Card.Meta> : undefined}
      </CardContent>
    </Card>
  );
};
export default Etablissement;
