import { splitProps } from "solid-js";
function SquareHintSparklesIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14.88.28l.35 1.07a2.2 2.2 0 001.4 1.4l1.07.35h.02a.42.42 0 010 .8l-1.07.35a2.2 2.2 0 00-1.4 1.4l-.35 1.07a.42.42 0 01-.8 0l-.35-1.07a2.23 2.23 0 00-1.4-1.4l-1.07-.35a.42.42 0 010-.8l1.07-.35a2.2 2.2 0 001.38-1.4l.35-1.07a.42.42 0 01.8 0zm4.9 7.93l-.76-.25a1.58 1.58 0 01-1-1l-.25-.76a.3.3 0 00-.57 0l-.25.77a1.58 1.58 0 01-.98 1l-.77.24a.3.3 0 000 .57l.77.25a1.58 1.58 0 011 1l.24.77a.3.3 0 00.58 0l.24-.77a1.58 1.58 0 011-1l.77-.24a.3.3 0 000-.57h-.02zM10 3.5c0-.17.04-.34.1-.5h-.85a.75.75 0 000 1.5h1.18a1.43 1.43 0 01-.43-1zm-6.25 8a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5c0 .41-.34.75-.75.75zm5.5 4a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zM5.25 3a.75.75 0 010 1.5.75.75 0 00-.75.75.75.75 0 01-1.5 0C3 4.01 4 3 5.25 3zM6 16.25c0 .41-.34.75-.75.75C4.01 17 3 16 3 14.75a.75.75 0 011.5 0c0 .41.34.75.75.75s.75.34.75.75zm8 0c0 .41.34.75.75.75 1.24 0 2.25-1 2.25-2.25a.75.75 0 00-1.5 0c0 .41-.34.75-.75.75a.75.75 0 00-.75.75z"/>
    </svg>);
}
export default SquareHintSparklesIcon;
