import { InfoButton } from '@/components';
import { Typography } from '@/components/ui/typography';
import { InfoBreakData } from '@/lib/types';

const testData: InfoBreakData = {
  description:
    'We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.',
  title: 'So How does it Work?',
};

const InfoPage = () => {
  const { description, title } = testData;

  return (
    <>
      <Typography variant="primary" className="text-secondary-foreground">
        {title}
      </Typography>
      <Typography variant="helper" className="text-secondary-foreground mt-4">
        {description}
      </Typography>
      <InfoButton className="mt-10 w-full">Next</InfoButton>
    </>
  );
};

export default InfoPage;
