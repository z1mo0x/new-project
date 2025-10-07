import Layout from "../../components/UX/Layout/Layout"
import Title from "../../components/UX/Title/Title"

type Props = {}

export default function Contacts({ }: Props) {
    return (
        <Layout>
            <div className="container">
                <Title>Контакты</Title>
            </div>
        </Layout>
    )
}