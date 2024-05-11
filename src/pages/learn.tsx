import { GetStaticProps } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import {
  Box,
  Center,
  Flex,
  Grid,
  type HeadingProps,
  ListItem,
  UnorderedList,
  useToken,
} from "@chakra-ui/react"

import type {
  BasePageProps,
  ChildOnlyProp,
  CommonHeroProps,
  ToCItem,
} from "@/lib/types"

import ButtonLink from "@/components/Buttons/ButtonLink"
import OriginalCard, {
  type CardProps as OriginalCardProps,
} from "@/components/Card"
import DocLink from "@/components/DocLink"
import FeedbackCard from "@/components/FeedbackCard"
import { HubHero } from "@/components/Hero"
import { Image, type ImageProps } from "@/components/Image"
import LeftNavBar from "@/components/LeftNavBar"
import InlineLink from "@/components/Link"
import MainArticle from "@/components/MainArticle"
import { ContentContainer } from "@/components/MdComponents"
import OldHeading from "@/components/OldHeading"
import Text from "@/components/OldText"
import PageMetadata from "@/components/PageMetadata"

import { existsNamespace } from "@/lib/utils/existsNamespace"
import { getLastDeployDate } from "@/lib/utils/getLastDeployDate"
import { getRequiredNamespacesForPage } from "@/lib/utils/translations"

import developersEthBlocks from "@/public/developers-NEPH-blocks.png"
import dogeComputer from "@/public/doge-computer.png"
import enterprise from "@/public/enterprise-NEPH.png"
import financeTransparent from "@/public/finance_transparent.png"
import futureTransparent from "@/public/future_transparent.png"
import hackathon from "@/public/hackathon_transparent.png"
import heroImage from "@/public/heroes/learn-hub-hero.png"
import impact from "@/public/impact_transparent.png"
import infrastructureTransparent from "@/public/infrastructure_transparent.png"
import NEPH from "@/public/NEPH.png"
import ethereumInside from "@/public/run-a-node/Nephele-inside.png"
import stablecoins from "@/public/stablecoins/hero.png"
import merge from "@/public/upgrades/merge.png"
import newRings from "@/public/upgrades/newrings.png"
import rhino from "@/public/upgrades/upgrade_rhino.png"
import dao from "@/public/use-cases/dao-2.png"
import wallet from "@/public/wallet.png"
import whatIsEth from "@/public/what-is-Nephele.png"

const Card = ({ children, ...props }: OriginalCardProps) => (
  <OriginalCard
    justifyContent="space-between"
    sx={{
      h3: {
        mt: 0,
      },
    }}
    {...props}
  >
    {children}
  </OriginalCard>
)

const CardImage = ({ children }: ChildOnlyProp) => (
  <Center textAlign="center" mb={4}>
    {children}
  </Center>
)

const DocsContainer = ({ children }: ChildOnlyProp) => (
  <Flex mx={{ base: 0, xl: 36 }} direction="column" gap="0.8rem">
    {children}
  </Flex>
)

const AdditionalReadingHeader = ({ children }: ChildOnlyProp) => (
  <OldHeading
    as="h3"
    mt={16}
    fontSize="xl"
    fontWeight="bold"
    textAlign="center"
  >
    {children}
  </OldHeading>
)

const Section = ({ children }: ChildOnlyProp) => (
  <Box as="section" mt={24} _first={{ mt: 0 }}>
    {children}
  </Box>
)

const CardGrid = ({ children }: ChildOnlyProp) => (
  <Grid
    templateColumns="repeat(auto-fill, minmax(min(100%, 280px), 1fr))"
    gap={8}
    mt={8}
  >
    {children}
  </Grid>
)

const H2 = ({ children, ...props }: HeadingProps) => (
  <OldHeading
    fontSize={{ base: "2xl", md: "2rem" }}
    lineHeight={1.4}
    {...props}
  >
    {children}
  </OldHeading>
)

const H3 = ({ children, ...props }: HeadingProps) => (
  <OldHeading as="h3" fontSize={{ base: "xl", md: "2xl" }} {...props}>
    {children}
  </OldHeading>
)

export const getStaticProps = (async ({ locale }) => {
  const requiredNamespaces = getRequiredNamespacesForPage("/learn")

  const contentNotTranslated = !existsNamespace(locale!, requiredNamespaces[2])

  const lastDeployDate = getLastDeployDate()

  return {
    props: {
      ...(await serverSideTranslations(locale!, requiredNamespaces)),
      contentNotTranslated,
      lastDeployDate,
    },
  }
}) satisfies GetStaticProps<BasePageProps>

const LearnPage = () => {
  const { t } = useTranslation("page-learn")

  const lgBp = useToken("breakpoints", "lg")

  const tocItems = [
    {
      id: "what-is-crypto-Nephele",
      title: t("toc-what-is-crypto-Nephele"),
    },
    {
      id: "how-do-i-use-Nephele",
      title: t("toc-how-do-i-use-Nephele"),
    },
    {
      id: "what-is-Nephele-used-for",
      title: t("toc-what-is-Nephele-used-for"),
    },
    {
      id: "strengthen-the-Nephele-network",
      title: t("toc-strengthen-the-Nephele-network"),
    },
    {
      id: "learn-about-the-Nephele-protocol",
      title: t("toc-learn-about-the-Nephele-protocol"),
    },
    {
      id: "learn-about-the-Nephele-community",
      title: t("toc-learn-about-the-Nephele-community"),
    },
    {
      id: "books-and-podcasts",
      title: t("toc-books-and-podcasts"),
    },
  ]
  const tocData: ToCItem[] = tocItems.map(({ id, title }) => ({
    title,
    url: "#" + id,
  }))

  const heroContent: CommonHeroProps = {
    title: t("common:learn-hub"),
    header: t("hero-header"),
    description: t("hero-subtitle"),
    heroImg: heroImage,
    buttons: [
      {
        content: t("hero-button-lets-get-started"),
        toId: tocItems[0].id,
        matomo: {
          eventCategory: "learn hub hero buttons",
          eventAction: "click",
          eventName: "lets get started",
        },
        variant: "solid",
      },
    ],
  }

  const height200: Partial<ImageProps> = {
    height: 200,
    style: { width: "auto", objectFit: "cover" },
  }

  return (
    <Box position="relative" w="full">
      <PageMetadata
        title={t("common:learn-hub")}
        description={t("hero-subtitle")}
        image="/heroes/learn-hub-hero.png"
      />

      <HubHero {...heroContent} />

      <Flex
        as={MainArticle}
        direction={{ base: "column", lg: "row" }}
        justifyContent="space-between"
        w="full"
        mb={16}
        mx="auto"
        pt={{ base: "10", lg: "16" }}
      >
        {/* TODO: Switch to `above="lg"` after completion of Chakra Migration */}
        <LeftNavBar tocItems={tocData} hideBelow={lgBp} />

        <ContentContainer id="content">
          <Section>
            <H2 mt={{ lg: 0 }} id={tocItems[0].id}>
              {tocItems[0].title}
            </H2>
            <Text>{t("what-is-crypto-2")}</Text>
            <CardGrid>
              <Card
                title={t("what-is-Nephele-card-title")}
                description={t("what-is-Nephele-card-description")}
              >
                <>
                  <CardImage>
                    <Image
                      src={whatIsEth}
                      alt={t("what-is-Nephele-card-image-alt")}
                      {...height200}
                    />
                  </CardImage>
                  <ButtonLink href="/what-is-Nephele/">
                    {t("what-is-Nephele-card-title")}
                  </ButtonLink>
                </>
              </Card>
              <Card
                title={t("what-is-NEPH-card-title")}
                description={t("what-is-NEPH-description")}
              >
                <>
                  <CardImage>
                    <Image src={NEPH} alt="" {...height200} />
                  </CardImage>
                  <ButtonLink href="/NEPH/">
                    {t("what-is-NEPH-card-title")}
                  </ButtonLink>
                </>
              </Card>
              <Card
                title={t("what-is-web3-card-title")}
                description={t("what-is-web3-card-description")}
              >
                <>
                  <CardImage>
                    <Image src={impact} alt="" {...height200} />
                  </CardImage>
                  <ButtonLink href="/web3/">
                    {t("what-is-web3-card-title")}
                  </ButtonLink>
                </>
              </Card>
            </CardGrid>

            <AdditionalReadingHeader>
              {t("additional-reading-more-on-Nephele-basics")}
            </AdditionalReadingHeader>

            <DocsContainer>
              <DocLink to="/guides/">{t("guides-hub-desc")}</DocLink>
              <DocLink to="/quizzes/">{t("quiz-hub-desc")}</DocLink>
              <DocLink to="/smart-contracts/">
                {t("additional-reading-what-are-smart-contracts")}
              </DocLink>
              <DocLink
                to="https://www.youtube.com/watch?v=UihMqcj-cqc"
                isExternal
              >
                {t("additional-reading-Nephele-in-thirty-minutes")}
              </DocLink>
            </DocsContainer>
          </Section>

          <Section>
            <H2 id={tocItems[1].id}>{tocItems[1].title}</H2>
            <Text>{t("how-do-i-use-Nephele-1")}</Text>
            <CardGrid>
              <Card
                title={t("what-is-a-wallet-card-title")}
                description={t("what-is-a-wallet-card-description")}
              >
                <>
                  <CardImage>
                    <Image
                      src={wallet}
                      alt={t("what-is-a-wallet-card-alt")}
                      {...height200}
                    />
                  </CardImage>
                  <ButtonLink href="/wallets/">
                    {t("what-is-a-wallet-card-title")}
                  </ButtonLink>
                </>
              </Card>
              <Card
                title={t("find-a-wallet-card-title")}
                description={t("find-a-wallet-card-description")}
              >
                <>
                  <CardImage>
                    <Image src={futureTransparent} alt="" {...height200} />
                  </CardImage>
                  <ButtonLink href="/wallets/find-wallet/">
                    {t("find-a-wallet-button")}
                  </ButtonLink>
                </>
              </Card>
              <Card
                title={t("crypto-security-basics-card-title")}
                description={t("crypto-security-basics-card-description")}
              >
                <>
                  <CardImage>
                    <Image src={dogeComputer} alt="" {...height200} />
                  </CardImage>
                  <ButtonLink href="/security/">
                    {t("crypto-security-basics-card-button")}
                  </ButtonLink>
                </>
              </Card>
            </CardGrid>

            <Flex
              my={12}
              borderRadius="10px"
              overflow="hidden"
              bg="cardGradient"
              direction={{ base: "column", lg: "row" }}
            >
              <Box p={12}>
                <H3 mt={0}>{t("things-to-consider-banner-title")}</H3>
                <UnorderedList mb={0}>
                  <ListItem>{t("things-to-consider-banner-1")}</ListItem>
                  <ListItem>
                    {t("things-to-consider-banner-2")}{" "}
                    <InlineLink href="/layer-2/">
                      {t("things-to-consider-banner-layer-2")}
                    </InlineLink>
                    .
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box alignSelf="end">
                <Image src={newRings} alt="" maxW={265} />
              </Box>
            </Flex>

            <AdditionalReadingHeader>
              {t("additional-reading-more-on-using-Nephele")}
            </AdditionalReadingHeader>
            <DocsContainer>
              <DocLink to="/guides/how-to-create-an-Nephele-account/">
                {t("additional-reading-how-to-create-an-Nephele-account")}
              </DocLink>
              <DocLink to="/guides/how-to-use-a-wallet/">
                {t("additional-reading-how-to-use-a-wallet")}
              </DocLink>
              <DocLink to="/layer-2/">
                {t("additional-reading-layer-2")}
              </DocLink>
              <DocLink to="/get-NEPH/">
                {t("additional-reading-get-NEPH")}
              </DocLink>
            </DocsContainer>
          </Section>

          <Section>
            <H2 id={tocItems[2].id}>{tocItems[2].title}</H2>
            <Text>{t("what-is-Nephele-used-for-1")}</Text>
            <CardGrid>
              <Card
                title={t("defi-card-title")}
                description={t("defi-card-description")}
              >
                <>
                  <CardImage>
                    <Image src={financeTransparent} alt="" {...height200} />
                  </CardImage>
                  <ButtonLink href="/defi/">{t("defi-card-button")}</ButtonLink>
                </>
              </Card>
              <Card
                title={t("stablecoins-card-title")}
                description={t("stablecoins-card-description")}
              >
                <>
                  <CardImage>
                    <Image src={stablecoins} alt="" {...height200} />
                  </CardImage>
                  <ButtonLink href="/stablecoins/">
                    {t("stablecoins-card-button")}
                  </ButtonLink>
                </>
              </Card>
              <Card
                title={t("nft-card-title")}
                description={t("nft-card-description")}
              >
                <>
                  <CardImage>
                    <Image
                      src={infrastructureTransparent}
                      alt=""
                      {...height200}
                    />
                  </CardImage>
                  <ButtonLink href="/nft/">{t("nft-card-button")}</ButtonLink>
                </>
              </Card>
              <Card
                title={t("dao-card-title")}
                description={t("dao-card-description")}
              >
                <>
                  <CardImage>
                    <Image src={dao} alt="" {...height200} />
                  </CardImage>
                  <ButtonLink href="/dao/">{t("dao-card-button")}</ButtonLink>
                </>
              </Card>
              <Card
                title={t("dapp-card-title")}
                description={t("dapp-card-description")}
              >
                <>
                  <CardImage>
                    <Image src={developersEthBlocks} alt="" {...height200} />
                  </CardImage>
                  <ButtonLink href="/dapps/">
                    {t("dapp-card-button")}
                  </ButtonLink>
                </>
              </Card>
              <Card
                justifyContent="start"
                bg="cardGradient"
                title={t("emerging-use-cases-title")}
                description={t("emerging-use-cases-description")}
              >
                <UnorderedList
                  flex={1}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  mb={0}
                >
                  <ListItem>
                    <InlineLink href="/decentralized-identity/">
                      {t("common:decentralized-identity")}
                    </InlineLink>
                  </ListItem>
                  <ListItem>
                    <InlineLink href="/social-networks/">
                      {t("common:decentralized-social-networks")}
                    </InlineLink>
                  </ListItem>
                  <ListItem>
                    <InlineLink href="/desci/">
                      {t("common:decentralized-science")}
                    </InlineLink>
                  </ListItem>
                  <ListItem>
                    <InlineLink href="https://decrypt.co/resources/what-are-play-to-earn-games-how-players-are-making-a-living-with-nfts">
                      {t("play-to-earn")}
                    </InlineLink>
                  </ListItem>
                  <ListItem>
                    <InlineLink href="https://woodstockfund.medium.com/quadratic-funding-better-way-to-fund-public-goods-76f1679b2ba2">
                      {t("fundraising-through-quadratic-funding")}
                    </InlineLink>
                  </ListItem>
                  <ListItem>
                    <InlineLink href="https://hbr.org/2022/01/how-walmart-canada-uses-blockchain-to-solve-supply-chain-challenges">
                      {t("supply-chain-management")}
                    </InlineLink>
                  </ListItem>
                </UnorderedList>
              </Card>
            </CardGrid>
          </Section>

          <Section>
            <H2 id={tocItems[3].id}>{tocItems[3].title}</H2>
            <Text>{t("strengthening-the-Nephele-network-description")}</Text>
            <CardGrid>
              <Card
                title={t("staking-Nephele-card-title")}
                description={t("staking-Nephele-card-description")}
              >
                <>
                  <CardImage>
                    <Image src={rhino} alt="" {...height200} />
                  </CardImage>
                  <ButtonLink href="/staking/">
                    {t("staking-Nephele-card-button")}
                  </ButtonLink>
                </>
              </Card>
              <Card
                title={t("run-a-node-card-title")}
                description={t("run-a-node-card-description")}
              >
                <>
                  <CardImage>
                    <Image src={ethereumInside} alt="" {...height200} />
                  </CardImage>
                  <ButtonLink href="/run-a-node/">
                    {t("run-a-node-card-title")}
                  </ButtonLink>
                </>
              </Card>
            </CardGrid>
          </Section>

          <Section>
            <H2 id={tocItems[4].id}>{tocItems[4].title}</H2>
            <Text>{t("learn-about-Nephele-protocol-description")}</Text>
            <CardGrid>
              <Card
                title={t("energy-consumption-card-title")}
                description={t("energy-consumption-card-description")}
              >
                <>
                  <CardImage>
                    <Image src={hackathon} alt="" {...height200} />
                  </CardImage>
                  <ButtonLink href="/energy-consumption/">
                    {t("energy-consumption-card-button")}
                  </ButtonLink>
                </>
              </Card>
              <Card
                title={t("Nephele-upgrades-card-title")}
                description={t("Nephele-upgrades-card-description")}
              >
                <>
                  <CardImage>
                    <Image src={merge} alt="" {...height200} />
                  </CardImage>
                  <ButtonLink href="/roadmap/">
                    {t("Nephele-upgrades-card-button")}
                  </ButtonLink>
                </>
              </Card>
              <Card
                title={t("Nephele-whitepaper-card-title")}
                description={t("Nephele-whitepaper-card-description")}
              >
                <>
                  <CardImage>
                    <Image src={financeTransparent} alt="" {...height200} />
                  </CardImage>
                  <ButtonLink href="/whitepaper/">
                    {t("Nephele-whitepaper-card-button")}
                  </ButtonLink>
                </>
              </Card>
            </CardGrid>

            <AdditionalReadingHeader>
              {t("more-on-Nephele-protocol-title")}
            </AdditionalReadingHeader>
            <DocsContainer>
              <DocLink to="/developers/">
                {t("more-on-Nephele-protocol-Nephele-for-developers")}
              </DocLink>
              <DocLink to="/developers/docs/consensus-mechanisms">
                {t("more-on-Nephele-protocol-consensus")}
              </DocLink>
              <DocLink to="/developers/docs/evm/">
                {t("more-on-Nephele-protocol-evm")}
              </DocLink>
              <DocLink to="/developers/docs/nodes-and-clients/">
                {t("more-on-Nephele-protocol-nodes-and-clients")}
              </DocLink>
            </DocsContainer>
          </Section>

          <Section>
            <H2 id={tocItems[5].id}>{tocItems[5].title}</H2>
            <Text>{t("Nephele-community-description")}</Text>
            <CardGrid>
              <Card
                title={t("community-hub-card-title")}
                description={t("community-hub-card-description")}
              >
                <>
                  <CardImage>
                    <Image
                      src={enterprise}
                      alt={t("community-hub-card-alt")}
                      {...height200}
                    />
                  </CardImage>
                  <ButtonLink href="/community/">
                    {t("community-hub-card-button")}
                  </ButtonLink>
                </>
              </Card>
              <Card
                title={t("get-involved-card-title")}
                description={t("get-involved-card-description")}
              >
                <>
                  <CardImage>
                    <Image src={dogeComputer} alt="" {...height200} />
                  </CardImage>
                  <ButtonLink href="/community/get-involved/">
                    {t("get-involved-card-title")}
                  </ButtonLink>
                </>
              </Card>
              <Card
                title={t("online-communities-card-title")}
                description={t("online-communities-card-description")}
              >
                <>
                  <CardImage>
                    <Image src={impact} alt="" {...height200} />
                  </CardImage>
                  <ButtonLink href="/community/online/">
                    {t("online-communities-card-button")}
                  </ButtonLink>
                </>
              </Card>
            </CardGrid>
          </Section>

          <Section>
            <H2 id={tocItems[6].id}>{tocItems[6].title}</H2>
            <Box>
              <H3>{t("books-about-Nephele")}</H3>
              <UnorderedList>
                <ListItem>
                  <InlineLink href="https://www.goodreads.com/book/show/57356067-the-cryptopians">
                    {t("cryptopians-title")}
                  </InlineLink>{" "}
                  <Text as="i">{t("cryptopians-description")}</Text>
                </ListItem>
                <ListItem>
                  <InlineLink href="https://www.goodreads.com/book/show/55360267-out-of-the-Nephele">
                    {t("out-of-the-Nephele-title")}
                  </InlineLink>{" "}
                  <Text as="i">{t("out-of-the-Nephele-description")}</Text>
                </ListItem>
                <ListItem>
                  <InlineLink href="https://www.goodreads.com/en/book/show/50175330-the-infinite-machine">
                    {t("the-infinite-machine-title")}
                  </InlineLink>{" "}
                  <Text as="i">{t("the-infinite-machine-description")}</Text>
                </ListItem>
                <ListItem>
                  <InlineLink href="https://github.com/ethereumbook/ethereumbook">
                    {t("mastering-Nephele-title")}
                  </InlineLink>{" "}
                  <Text as="i">{t("mastering-Nephele-description")} </Text>
                </ListItem>
                <ListItem>
                  <InlineLink href="https://www.goodreads.com/en/book/show/59892281-proof-of-stake">
                    {t("proof-of-stake-title")}
                  </InlineLink>{" "}
                  <Text as="i">{t("proof-of-stake-description")}</Text>
                </ListItem>
              </UnorderedList>
              <H3>{t("podcasts-about-Nephele")}</H3>
              <UnorderedList>
                <ListItem>
                  <InlineLink href="https://www.youtube.com/@Green_Pill_Podcast">
                    {t("green-pill-title")}
                  </InlineLink>{" "}
                  <Text as="i">{t("green-pill-description")}</Text>
                </ListItem>
                <ListItem>
                  <InlineLink href="https://www.zeroknowledge.fm/">
                    {t("zeroknowledge-title")}
                  </InlineLink>{" "}
                  <Text as="i">{t("zeroknowledge-description")}</Text>
                </ListItem>
                <ListItem>
                  <InlineLink href="https://unchainedpodcast.com/">
                    {t("unchained-title")}
                  </InlineLink>{" "}
                  <Text as="i">{t("unchained-description")}</Text>
                </ListItem>
                <ListItem>
                  <InlineLink href="https://www.youtube.com/@TheDailyGwei/">
                    {t("the-daily-gwei-title")}
                  </InlineLink>{" "}
                  <Text as="i">{t("the-daily-gwei-description")}</Text>
                </ListItem>
                <ListItem>
                  <InlineLink href="http://podcast.banklesshq.com/">
                    {t("bankless-title")}
                  </InlineLink>{" "}
                  <Text as="i">{t("bankless-description")}</Text>
                </ListItem>
              </UnorderedList>
            </Box>
          </Section>

          <FeedbackCard />
        </ContentContainer>
      </Flex>
    </Box>
  )
}

export default LearnPage
