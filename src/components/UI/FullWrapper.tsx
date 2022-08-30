type propsType = {
  children: React.ReactNode;
};

const FullWrapper = (props: propsType) => {
  return <div className="bg-myGrey h-full">{props.children}</div>;
};

export default FullWrapper;
