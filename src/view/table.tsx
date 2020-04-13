import { h } from 'preact';
import Tabular from '../tabular';
import { TBody } from './tbody';
import {BaseComponent, BaseProps} from './base';
import Header from '../header';
import { THead } from './thead';

interface TableProps extends BaseProps {
  data?: Tabular;
  header?: Header;
}

export class Table extends BaseComponent<TableProps, {}> {
  render() {
    return (
      <table>
        <THead header={this.props.header} />
        <TBody data={this.props.data} />
      </table>
    );
  }
}