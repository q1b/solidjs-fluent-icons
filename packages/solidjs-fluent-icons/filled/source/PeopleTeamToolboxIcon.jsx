import { splitProps } from "solid-js";
function PeopleTeamToolboxIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12.5 4.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm5 .5a2 2 0 11-4 0 2 2 0 014 0zm-13 2a2 2 0 100-4 2 2 0 000 4zM6 9.25C6 8.56 6.56 8 7.25 8h5.5c.6 0 1.1.43 1.22 1h-.47a2.5 2.5 0 00-2.46 2.04A2.5 2.5 0 009 13.5v4c0 .13.01.26.03.38A4 4 0 016 14V9.25zm11.96 1.8H18v-1.8C18 8.56 17.44 8 16.75 8h-2.13c.2.3.33.63.37 1h.51a2.5 2.5 0 012.46 2.04zM5 9.24c0-.46.14-.9.38-1.25H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 003.4 2.97C5.14 15.37 5 14.7 5 14V9.25zM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 00-1 0v.5h-3v-.5a.5.5 0 00-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5zm1-.5v.5h3v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5zm4 5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5V16h2v.5a.5.5 0 001 0V16h3v.5a.5.5 0 001 0z"/>
    </svg>);
}
export default PeopleTeamToolboxIcon;
