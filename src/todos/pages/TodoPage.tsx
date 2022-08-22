// Layout
import { TodosLayout } from '../layout';
// Components
import { Header, TodoCard, Tools } from '../components';
// TODO: Delete fake data
import {testData} from '../../data/data';

export const TodoPage = () => {
  return (
    <TodosLayout>
      <Header />
      <Tools />

      {
        testData.map( data => (
          <TodoCard
            key={ data.id }
            title={ data.title } 
            statusColor={ data.color }
          />
        ))
      }

    </TodosLayout>
  )
}
