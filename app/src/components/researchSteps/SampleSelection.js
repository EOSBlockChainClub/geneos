import React from 'react';
import {
  Container,
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Form,
  Label,
  Input
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { iconEdit } from '../../utils/fontawesome';
import NavRow from './NavRow';

export default class SampleSelection extends React.Component {
  emitChange(name, value) {
    const { onChange, data } = this.props;

    const nextData = {
      ...data,
      [name]: value
    };

    onChange(nextData);
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.emitChange(name, value);
  };

  renderInput(label, name) {
    const { data } = this.props;

    return (
      <Row className="row-margin">
        <Col xs={3}>
          <Label>{label}</Label>
        </Col>
        <Col xs={6}>
          <Input
            name={name}
            onChange={this.handleChange}
            value={data[name] || ''}
          />
        </Col>
      </Row>
    );
  }

  renderDuration(label, name) {
    const { data } = this.props;

    const { [name]: duration } = data || {};

    const durations = ['1 Month', '3 Months', '1 Year'];

    return (
      <Row className="row-margin">
        <Col xs={3}>
          <Label>{label}</Label>
        </Col>
        <Col xs={6}>
          {durations.map(label => (
            <Button
              key={label}
              type="button"
              onClick={() => this.emitChange(name, label)}
              color={duration === label ? 'primary' : 'secondary'}
            >
              {label}
            </Button>
          ))}
          <Button type="button">
            <FontAwesomeIcon icon={iconEdit} />
            Custom
          </Button>
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <Container>
        <Card>
          <CardBody>
            <Form>
              {this.renderInput('Genetics', 'genetics')}
              {this.renderDuration('Age', 'age')}
              {this.renderInput('Location', 'location')}
              {this.renderInput('Weight Range', 'weightRange')}
              {this.renderInput('Sleep Range', 'sleepRange')}
              {this.renderInput('Activity Level', 'activityLevel')}
            </Form>
            <NavRow step={1} jumpToStep={this.props.jumpToStep} />
          </CardBody>
        </Card>
      </Container>
    );
  }
}
