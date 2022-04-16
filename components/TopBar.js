import { Button, PageHeader } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const TopBar = ({ type, onClick }) => {
  return (
    <PageHeader
      title="Micro Reddit"
      subTitle="A sihtty Reddit client."
      extra={[
        <Button icon={<SearchOutlined />} type={type} onClick={onClick} />,
      ]}
    />
  );
};

export default TopBar;
