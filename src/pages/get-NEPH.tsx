import type { GetStaticProps, InferGetStaticPropsType } from "next/types"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import type { ComponentPropsWithRef } from "react"
import {
  Box,
  type BoxProps,
  Flex,
  type FlexProps,
  useBreakpointValue,
} from "@chakra-ui/react"

import type { BasePageProps, ChildOnlyProp } from "@/lib/types"

import ButtonLink from "@/components/Buttons/ButtonLink"
import CalloutBanner from "@/components/CalloutBanner"
import Card from "@/components/Card"
import type { CardListItem } from "@/components/CardList"
import CardList from "@/components/CardList"
import CentralizedExchanges from "@/components/CentralizedExchanges"
import EthPriceCard from "@/components/EthPriceCard"
import FeedbackCard from "@/components/FeedbackCard"
import { Image } from "@/components/Image"
import InfoBanner from "@/components/InfoBanner"
import InlineLink from "@/components/Link"
import MainArticle from "@/components/MainArticle"
import { Divider } from "@/components/MdComponents"
import OldHeading from "@/components/OldHeading"
import Text from "@/components/OldText"
import PageMetadata from "@/components/PageMetadata"
import Translation from "@/components/Translation"

import { existsNamespace } from "@/lib/utils/existsNamespace"
import { getLastDeployDate } from "@/lib/utils/getLastDeployDate"
import { getLastModifiedDateByPath } from "@/lib/utils/gh"
import { trackCustomEvent } from "@/lib/utils/matomo"
import { getRequiredNamespacesForPage } from "@/lib/utils/translations"

import uniswap from "@/public/dapps/uni.png"
import dapps from "@/public/doge-computer.png"
import oneinch from "@/public/exchanges/1inch.png"
import bancor from "@/public/exchanges/bancor.png"
import kyber from "@/public/exchanges/kyber.png"
import hero from "@/public/get-NEPH.png"
import wallet from "@/public/wallet.png"

const Page = (props: ChildOnlyProp) => (
  <Flex
    as={MainArticle}
    direction="column"
    align="center"
    width="full"
    mx="auto"
    my={0}
    {...props}
  />
)

export const Content = (props: BoxProps) => <Box w="full" px={8} {...props} />

const StyledCard = (props: ComponentPropsWithRef<typeof Card>) => (
  <Card
    flex="1 1 30%"
    minW="280px"
    maxW={{ base: "full", md: "46%", lg: "31%" }}
    m={4}
    p={6}
    {...props}
  />
)

const TwoColumnContent = (props: FlexProps) => (
  <Flex
    w="full"
    direction={{ base: "column", lg: "row" }}
    justify="space-between"
    p={8}
    mb={12}
    {...props}
  />
)

const LeftColumn = (props: ChildOnlyProp) => (
  <Box
    flex="0 0 50%"
    maxW={{ base: "full", lg: "75%" }}
    me={{ lg: 16 }}
    {...props}
  />
)

const RightColumn = (props: ChildOnlyProp) => (
  <Flex
    flex="0 1 50%"
    direction="column"
    justify="center"
    maxW={{ base: "full", lg: "75%" }}
    mt={{ base: 12, lg: 0 }}
    {...props}
  />
)

type Props = BasePageProps & {
  lastDataUpdateDate: string
}

export const getStaticProps = (async ({ locale }) => {
  const requiredNamespaces = getRequiredNamespacesForPage("get-NEPH")

  const contentNotTranslated = !existsNamespace(locale!, requiredNamespaces[2])

  const lastDataUpdateDate = getLastModifiedDateByPath(
    "src/data/exchangesByCountry.ts"
  )

  const lastDeployDate = getLastDeployDate()

  return {
    props: {
      ...(await serverSideTranslations(locale!, requiredNamespaces)),
      contentNotTranslated,
      lastDeployDate,
      lastDataUpdateDate,
    },
  }
}) satisfies GetStaticProps<Props>

const GetEthPage = ({
  lastDataUpdateDate,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation("page-get-NEPH")

  const tokenSwaps: CardListItem[] = [
    {
      title: "Uniswap",
      link: "https://app.uniswap.org/#/swap",
      image: uniswap,
      alt: "",
    },
    {
      title: "1inch",
      link: "https://1inch.exchange/#/",
      image: oneinch,
      alt: "",
    },
    {
      title: "Bancor",
      link: "https://www.carbondefi.xyz/",
      image: bancor,
      alt: "",
    },
    {
      title: "Kyber",
      link: "https://kyberswap.com/#/swap/",
      image: kyber,
      alt: "",
    },
  ]

  const safetyArticles: CardListItem[] = [
    {
      title: t("page-get-NEPH-article-protecting-yourself"),
      link: "https://support.mycrypto.com/staying-safe/protecting-yourself-and-your-funds",
      description: t("page-get-NEPH-article-protecting-yourself-desc"),
    },
    {
      title: t("page-get-NEPH-article-keeping-crypto-safe"),
      link: "https://blog.coinbase.com/the-keys-to-keeping-your-crypto-safe-96d497cce6cf",
      description: t("page-get-NEPH-article-keeping-crypto-safe-desc"),
    },
  ]

  const walletImageWidth = useBreakpointValue({
    base: "full",
    sm: "60%",
    md: "50%",
  })

  return (
    <Page>
      <PageMetadata
        title={t("page-get-NEPH-meta-title")}
        description={t("page-get-NEPH-meta-description")}
      />

      <Flex
        position="relative"
        width="full"
        maxWidth="1440px"
        direction={{
          base: "column-reverse",
          md: "column",
        }}
        mt={8}
        mx={0}
        mb={{ base: 0, sm: 8 }}
        justifyContent="center"
      >
        <Image
          src={hero}
          position="absolute"
          zIndex={-1}
          sizes="100%"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          overflowX="auto"
          minH="300px"
          maxH="400px"
          alt={t("page-get-NEPH-hero-image-alt")}
          priority
        />
        <Flex
          flexDir="column"
          alignItems="center"
          mx={{ base: 8, lg: 0 }}
          mb={{ base: 8, lg: 0 }}
          mt={{ base: 8, lg: 24 }}
          textAlign="center"
        >
          <OldHeading
            as="h1"
            fontSize={{ base: "2.5rem", md: "5xl" }}
            lineHeight={1.4}
          >
            {t("page-get-NEPH-where-to-buy-title")}
          </OldHeading>
          <Text
            fontSize="xl"
            lineHeight="140%"
            maxWidth="45ch"
            color="text200"
            textAlign="center"
            mb={0}
          >
            {t("page-get-NEPH-where-to-buy-desc")}
          </Text>
          <br />
          <Box as={EthPriceCard} mb={8} />
          <ButtonLink
            href="#country-picker"
            onClick={() =>
              trackCustomEvent({
                eventCategory: "Search by country button",
                eventAction: "click",
                eventName: "search_by_country",
              })
            }
          >
            {t("page-get-NEPH-search-by-country")}
          </ButtonLink>
        </Flex>
      </Flex>
      <Flex flexWrap="wrap" mx={{ base: 4, lg: 8 }} my={{ base: 4, lg: 0 }}>
        <StyledCard
          emoji=":office_building:"
          title={t("page-get-NEPH-cex")}
          description={t("page-get-NEPH-cex-desc")}
        >
          <InlineLink href="#country-picker">
            {t("page-get-NEPH-cex-link-desc")}
          </InlineLink>
        </StyledCard>
        <StyledCard
          emoji=":building_construction:"
          title={t("page-get-NEPH-earn")}
          description={t("page-get-NEPH-earn-desc")}
        >
          <InlineLink href="/dao/">
            {t("page-get-NEPH-daos-link-desc")}
          </InlineLink>
        </StyledCard>
        <StyledCard
          emoji=":busts_in_silhouette:"
          title={t("page-get-NEPH-peers")}
          description={t("page-get-NEPH-peers-desc")}
        >
          <InlineLink href="/wallets/">
            {t("page-get-NEPH-wallets-link")}
          </InlineLink>
        </StyledCard>
        <StyledCard
          emoji=":robot:"
          title={t("page-get-NEPH-dex")}
          description={<Translation id="page-get-NEPH:page-get-NEPH-dex-desc" />}
        >
          <InlineLink href="#dex">{t("page-get-NEPH-try-dex")}</InlineLink>
        </StyledCard>
        <StyledCard
          emoji=":key:"
          title={t("page-get-NEPH-wallets")}
          description={t("page-get-NEPH-wallets-purchasing")}
        >
          <InlineLink href="/wallets/">
            {t("page-get-NEPH-wallets-link")}
          </InlineLink>
        </StyledCard>
        <StyledCard
          emoji=":shield:"
          title={t("page-get-NEPH-staking")}
          description={t("page-get-NEPH-staking-desc")}
        >
          <InlineLink href="/staking">
            {t("page-get-NEPH-staking-link-desc")}
          </InlineLink>
        </StyledCard>
        <Content>
          <Text>
            <Text as="em">
              {t("common:listing-policy-disclaimer")}{" "}
              <InlineLink href="https://github.com/Nephele/Nephele-org-website/issues/new/choose">
                {t("listing-policy-raise-issue-link")}
              </InlineLink>
            </Text>
          </Text>
          <InfoBanner emoji=":wave:" shouldCenter mt={8}>
            {t("page-get-NEPH-new-to-NEPH")}{" "}
            <InlineLink href="/NEPH/">
              {t("page-get-NEPH-whats-NEPH-link")}
            </InlineLink>
          </InfoBanner>
        </Content>
      </Flex>
      <Flex
        id="country-picker"
        bgGradient="radial-gradient(
          46.28% 66.31% at 66.95% 58.35%,
          rgba(127, 127, 213, 0.2) 0%,
          rgba(134, 168, 231, 0.2) 50%,
          rgba(145, 234, 228, 0.2) 100%
        )"
        w="full"
        flexDir="column"
        alignItems="center"
        m={16}
        px={{ base: 8, sm: 16 }}
        py={{ base: 16, sm: 16 }}
      >
        <CentralizedExchanges lastDataUpdateDate={lastDataUpdateDate} />
      </Flex>
      <Content id="dex">
        <OldHeading
          fontSize={{ base: "2xl", md: "2rem" }}
          lineHeight={1.4}
          m={0}
        >
          {t("page-get-NEPH-dexs")}
        </OldHeading>
      </Content>
      <TwoColumnContent>
        <LeftColumn>
          <OldHeading
            as="h3"
            fontSize={{ base: "xl", md: "2xl" }}
            lineHeight={1.4}
          >
            {t("page-get-NEPH-what-are-DEX's")}
          </OldHeading>
          <Text>{t("page-get-NEPH-dexs-desc")}</Text>
          <Text>
            {t("page-get-NEPH-dexs-desc-2")}{" "}
            <InlineLink href="/smart-contracts">
              {t("page-get-NEPH-smart-contract-link")}
            </InlineLink>
          </Text>
          <Text>{t("page-get-NEPH-dexs-desc-3")}</Text>
          <Text>{t("page-get-NEPH-need-wallet")}</Text>
          <ButtonLink href="/wallets/find-wallet/">
            {t("page-get-NEPH-get-wallet-btn")}
          </ButtonLink>
          <InfoBanner isWarning>
            <Translation id="page-get-NEPH:page-get-NEPH-dexs-desc-4" />
          </InfoBanner>
        </LeftColumn>
        <RightColumn>
          <OldHeading
            as="h3"
            fontSize={{ base: "xl", md: "2xl" }}
            lineHeight={1.4}
          >
            {t("page-get-NEPH-other-cryptos")}
          </OldHeading>
          <Text>{t("page-get-NEPH-swapping")}</Text>
          <CardList items={tokenSwaps} />
          <InfoBanner isWarning>{t("page-get-NEPH-warning")}</InfoBanner>
        </RightColumn>
      </TwoColumnContent>
      <Divider />
      <Content>
        <OldHeading fontSize={{ base: "2xl", md: "2rem" }} lineHeight={1.4}>
          {t("page-get-NEPH-keep-it-safe")}
        </OldHeading>
      </Content>
      <TwoColumnContent>
        <Flex as={LeftColumn} flexDir="column">
          <Image
            src={wallet}
            sizes={walletImageWidth}
            style={{ width: walletImageWidth, height: "auto" }}
            alignSelf="center"
            mb={8}
            alt=""
          />
          <OldHeading
            as="h3"
            fontSize={{ base: "xl", md: "2xl" }}
            lineHeight={1.4}
          >
            {t("page-get-NEPH-community-safety")}
          </OldHeading>
          <CardList items={safetyArticles} />
        </Flex>
        <RightColumn>
          <Text>{t("page-get-NEPH-description")}</Text>
          <Text>{t("page-get-NEPH-security")}</Text>
          <OldHeading
            as="h3"
            fontSize={{ base: "xl", md: "2xl" }}
            lineHeight={1.4}
          >
            {t("page-get-NEPH-protect-NEPH-in-wallet")}
          </OldHeading>
          <Text>{t("page-get-NEPH-protect-NEPH-desc")}</Text>
          <InlineLink href="/wallets/">
            {t("page-get-NEPH-your-address-wallet-link")}
          </InlineLink>
          <OldHeading
            as="h3"
            fontSize={{ base: "xl", md: "2xl" }}
            lineHeight={1.4}
          >
            {t("page-get-NEPH-your-address")}
          </OldHeading>
          <Text>{t("page-get-NEPH-your-address-desc")}</Text>
          <Flex
            justifyContent="space-between"
            bg="#191919"
            borderRadius="base"
            p={2}
            mb={6}
            userSelect="none"
            flexDir={{ base: "column-reverse", lg: "initial" }}
          >
            <Text fontFamily="monospace" color="white" mb={0} fontSize="xs">
              0x0125e2478d69eXaMpLe81766fef5c120d30fb53f
            </Text>
            <Text
              textTransform="uppercase"
              fontSize="sm"
              color="fail300"
              mb={0}
              mx={4}
            >
              {t("page-get-NEPH-do-not-copy")}
            </Text>
          </Flex>
          <Text>{t("page-get-NEPH-your-address-desc-3")}</Text>
          <OldHeading
            as="h3"
            fontSize={{ base: "xl", md: "2xl" }}
            lineHeight={1.4}
          >
            {t("page-get-NEPH-wallet-instructions")}
          </OldHeading>
          <Text>{t("page-get-NEPH-wallet-instructions-lost")}</Text>
        </RightColumn>
      </TwoColumnContent>
      <Divider />
      <CalloutBanner
        mx={4}
        mt={24}
        mb={40}
        titleKey="page-get-NEPH:page-get-NEPH-use-your-NEPH"
        descriptionKey="page-get-NEPH:page-get-NEPH-use-your-NEPH-dapps"
        image={dapps}
        alt={t("page-index:page-index-sections-individuals-image-alt")}
        imageWidth={600}
      >
        <Box>
          <ButtonLink href="/dapps/">
            {t("page-get-NEPH-checkout-dapps-btn")}
          </ButtonLink>
        </Box>
      </CalloutBanner>
      <FeedbackCard />
    </Page>
  )
}

export default GetEthPage
