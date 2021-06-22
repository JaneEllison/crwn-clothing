import { useSelector } from 'react-redux';

import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const CollectionsOverviewContainer = () => {
  const isLoading = useSelector(selectIsCollectionsFetching);
  const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

  return <CollectionsOverviewWithSpinner isLoading={isLoading} />;
};

export default CollectionsOverviewContainer;
