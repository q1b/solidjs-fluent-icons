import { splitProps } from "solid-js";
function PeopleLockIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 5.75a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0zm1 8.7c-.74.83-2.02 1.55-4.25 1.55-5.25 0-5.25-4-5.25-4 0-1.1.9-2 2-2H10a2 2 0 012 2l-.02.28A2 2 0 0011 14v.45zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-1 3v1H13a1 1 0 00-1 1v4a1 1 0 001 1h5a1 1 0 001-1v-4a1 1 0 00-1-1h-.5v-1a2 2 0 10-4 0zm1 1v-1a1 1 0 112 0v1h-2zm1 2.25a.75.75 0 110 1.5.75.75 0 010-1.5z"/>
    </svg>);
}
export default PeopleLockIcon;
