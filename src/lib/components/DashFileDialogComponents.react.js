import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FilePicker } from 'react-file-picker'

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashFileDialogComponents extends Component {
    render() {
        const props = {...this.props, ...this.props.overrideProps};
        const src = props.src;
        return (
            <FilePicker
                src={src}
                onChange={props.onChange}
                onError={props.onError}
                maxSize={props.maxSize}
                extensions={props.extensions}
                style={props.style}
                validateContent={props.validateContent}
            />
        )
    }
}

DashFileDialogComponents.defaultProps = {};

const propTypesDefinitions = {
  onChange: PropTypes.func.isRequired,
  onError: PropTypes.func,
  // max file size in MB
  maxSize: PropTypes.number,
  // file extension
  extensions: PropTypes.array,
  // validate file contents
  validateContent: PropTypes.func,
  style: PropTypes.object,
};

DashFileDialogComponents.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    overrideProps: PropTypes.shape(propTypesDefinitions),

    src: PropTypes.string.isRequired,

    style: PropTypes.objectOf(PropTypes.string),

    onChange: PropTypes.func.isRequired,

    maxSize: PropTypes.number,

    extensions: PropTypes.array,
};
