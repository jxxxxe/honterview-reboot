import QuestionFilter from '@/containers/question-list/components/question-filter';
import QuestionInput from '@/containers/question-list/components/question-input/question-input';
import QuestionList from '@/containers/question-list/components/question-list';
import QuestionPageination from '@/containers/question-list/components/question-pagination';
import QuestionSort from '@/containers/question-list/components/question-sort';
import QuestionListProvider from '@/containers/question-list/contexts';

const QuestionsListPage = () => {
  return (
    <QuestionListProvider>
      <div className="flex min-w-[40rem] flex-col justify-center gap-8 px-20 py-8">
        <h1 className="flex justify-center text-tripleLarge font-bold">
          질문검색
        </h1>
        <QuestionInput />
        <QuestionFilter />
        <QuestionSort />
        <QuestionList />
        <QuestionPageination />
      </div>
    </QuestionListProvider>
  );
};

export default QuestionsListPage;
