import { useSelector } from 'react-redux';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from '../collecton/collection.component';

const CollectiomPageContainer = (props) => {
  const isLoaded = useSelector((state) => selectIsCollectionsLoaded(state));
  const CollectionPageWithSpinner = WithSpinner(CollectionPage);

  return <CollectionPageWithSpinner isLoading={!isLoaded} {...props}/>;
};

export default CollectiomPageContainer;
