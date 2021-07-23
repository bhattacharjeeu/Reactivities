import { Grid, Header, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activities: Activity[];
}

export default function ActivityGrid({ activities }: Props) {
  return (
    <Grid divided>
      <Grid.Row key="1" columns={2}>
        <Grid.Column>
          <Header as="h3">Title:</Header>
        </Grid.Column>
        <Grid.Column>
          <Header as="h3">Category:</Header>
        </Grid.Column>
      </Grid.Row>

      {activities.map((activity) => (
        <Grid.Row key={activity.id} columns={2}>
          <Grid.Column>
            <p>{activity.title}</p>
          </Grid.Column>
          <Grid.Column>
            <p>{activity.category}</p>
          </Grid.Column>
        </Grid.Row>
      ))}
    </Grid>
  );
}
