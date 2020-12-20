import { useRecoilValue } from 'recoil';
import InfiniteScroll from 'react-infinite-scroll-component';
import { paginate } from '../../../Helpers';
import { packagesState, activePackageState } from '../../../Recoil/atoms';
import IconCard from './iconCard';
import { StyledPackageIconsGrid } from '../styles';
import { useState } from 'react';

const PackageIcons =  () => {
  const packages = useRecoilValue(packagesState);
  const activePackage = useRecoilValue(activePackageState);
  const currentPackage = packages[activePackage];
  const allIcons = Object.keys(currentPackage.icons);
  const [icons, setIcons] = useState(paginate(allIcons, 15, 1));

  const handleGetMoreIcons = () => {
    setIcons([...icons, ...paginate(allIcons, 0, 15)]);
  };

  console.log({
    icons
  })
  return <StyledPackageIconsGrid columns={3}>
    {icons.map(icon => (
      <IconCard icon={icon} />
    ))}
  </StyledPackageIconsGrid>
};

export default PackageIcons;