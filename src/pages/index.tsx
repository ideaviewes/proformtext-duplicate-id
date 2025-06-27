import yayJpg from '../assets/yay.jpg';
import {ModalForm, PageContainer, ProColumns, ProFormText, ProTable} from "@ant-design/pro-components";
import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";

export default function HomePage() {
    const columns: ProColumns<UserData>[] = [
        {
            title: "ID",
            dataIndex: "id"
        },
        {
            title: "支付宝姓名",
            dataIndex: "alipay_username",
        },
        {
            title: "支付宝账号",
            dataIndex: "alipay_account",
        }
    ]
    return (
        <PageContainer>
            <ProTable
                rowKey={"id"}
                columns={columns}
            />


            <ModalForm
                title="新建表单"
                trigger={
                    <Button type="primary">
                        <PlusOutlined/>
                        新建表单
                    </Button>
                }
            >
                <ProFormText
                    name={"alipay_username"}
                    label={"支付宝姓名"}
                    placeholder={"请填写支付宝姓名"}
                />
                <ProFormText
                    name={"alipay_account"}
                    label={"支付宝账号"}
                    placeholder={"请填写支付宝账号"}
                />
            </ModalForm>
        </PageContainer>
    );
}
