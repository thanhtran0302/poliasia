import React, { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import {
  Layout,
  Title,
  Subtitle,
  Container,
  SvgContainer,
  TitleContainer,
  RedSpanText,
  Description,
  FormContainer,
  Card,
  CardTitle,
  GreenSpanText
} from './Home.styles';
import RedSideBg from '../../assets/icons/red-bg.svg';
import Letter from '../../assets/icons/letter.svg';
import Input, { InputTypes } from '../input/Input';
import Button, { ButtonTypes } from '../button/Button';
import { isEmail } from '../../utils/global';
import Loader from '../loader/Loader';
import CardImage from '../../assets/images/thediplomat.png';
import { useSmartphoneDevice } from '../../constants/responsive';

const Home = () => {
  const [email, setEmail] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const isMobile: boolean = useSmartphoneDevice();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const { value } = event.target;
    setEmail(value);
  };

  const onSubmit = async (event: FormEvent<Element>) => {
    event.preventDefault();

    setSuccess(false);
    setError(false);
    setLoading(true);
    if (isEmail(email)) {
      try {
        await fetch(`/api/airtable`, {
          method: 'POST',
          body: JSON.stringify({
            email
          })
        });
        setSuccess(true);
        setError(false);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        setSuccess(false);
        throw error;
      }
    }
  };

  return (
    <Layout>
      {isLoading && <Loader />}
      <Container>
        <TitleContainer>
          <Letter />
          <Title>
            Poli<RedSpanText>asia</RedSpanText>
          </Title>
        </TitleContainer>
        <Subtitle>
          Toutes les actualités sur l’Asie en{' '}
          <RedSpanText>5 minutes</RedSpanText>
        </Subtitle>
        <Description>
          Vous recevez les informations importantes concernant l’Asie
          directement dans <RedSpanText>votre boîte mail</RedSpanText>. Restez
          informé <RedSpanText>gratuitement</RedSpanText>.
        </Description>
        <FormContainer onSubmit={onSubmit}>
          <Input
            id="email"
            type={InputTypes.EMAIL}
            label={'Votre e-mail'}
            value={email}
            onChange={onChange}
            required
          />
          <Button type={ButtonTypes.SUBMIT} label={"Je m'inscris"} />
        </FormContainer>
        <div>
          {isSuccess && (
            <GreenSpanText>Merci pour votre inscription</GreenSpanText>
          )}
          {isError && (
            <RedSpanText>
              Une erreur est survenue. Veuillez ré-essayer.
            </RedSpanText>
          )}
        </div>
      </Container>
      {!isMobile && (
        <Fragment>
          <Container>
            <Card>
              <CardTitle>
                Quel est l'élément déclencheur du boom des énergies
                renouvelables au Vietnam ?
              </CardTitle>
              <img src={CardImage} />
              <div>
                <p>
                  En 2014, la capacité installée d'énergie renouvelable non
                  hydroélectrique au Vietnam s'élevait à 109 mégawatts, soit
                  environ un tiers de un pour cent de la capacité totale
                  installée du pays, qui est de 34 079 MW. À l'époque, le mix
                  électrique du Vietnam était dominé par l'hydroélectricité, le
                  charbon et le gaz naturel.
                </p>
                <p>
                  Le Vietnam a vu l'énergie éolienne et solaire passer de zéro à
                  10 % de son approvisionnement en cinq ans seulement. Quel est
                  l'élément déclencheur de ce boom des énergies renouvelables ?
                </p>
              </div>
            </Card>
          </Container>
          <SvgContainer>
            <RedSideBg />
          </SvgContainer>
        </Fragment>
      )}
    </Layout>
  );
};

export default Home;
