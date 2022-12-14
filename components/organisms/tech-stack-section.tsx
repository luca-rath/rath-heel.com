import Section from '../molecules/section';
import DockerLogo from '../../assets/logos/docker.svg';
import ElasticsearchLogo from '../../assets/logos/elasticsearch.svg';
import GraphQLLogo from '../../assets/logos/graphql.svg';
import NestJSLogo from '../../assets/logos/nestjs.svg';
import NextJSLogo from '../../assets/logos/nextjs.svg';
import PHPLogo from '../../assets/logos/php.svg';
import PrismaLogo from '../../assets/logos/prisma.svg';
import ReactJSLogo from '../../assets/logos/reactjs.svg';
import RedisLogo from '../../assets/logos/redis.svg';
import RemixLogo from '../../assets/logos/remix.svg';
import SuluLogo from '../../assets/logos/sulu.svg';
import SymfonyLogo from '../../assets/logos/symfony.svg';
import TypeScriptLogo from '../../assets/logos/typescript.svg';
import LogoLink from '../atoms/logo-link';

export default function TechStackSection() {
    return (
        <Section title="Tech Stack">
            <div className="mx-auto flex max-w-md flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:max-w-lg sm:gap-x-12 sm:gap-y-12 md:max-w-xl md:justify-between md:gap-x-12 lg:max-w-3xl lg:gap-x-12">
                <LogoLink label="NextJS" url="https://nextjs.org" Component={NextJSLogo} size="xs" />
                <LogoLink label="ReactJS" url="https://reactjs.org" Component={ReactJSLogo} size="lg" />
                <LogoLink label="Remix" url="https://remix.run" Component={RemixLogo} size="xs" />
                <LogoLink
                    label="TypeScript"
                    url="https://www.typescriptlang.org"
                    Component={TypeScriptLogo}
                    size="lg"
                />
                <LogoLink label="NestJS" url="https://nestjs.com" Component={NestJSLogo} size="md" />
                <LogoLink label="GraphQL" url="https://graphql.org" Component={GraphQLLogo} size="md" />
                <LogoLink label="Prisma" url="https://www.prisma.io" Component={PrismaLogo} size="md" />
                <LogoLink label="PHP" url="https://www.php.net" Component={PHPLogo} size="xs" />
                <LogoLink label="Symfony" url="https://symfony.com" Component={SymfonyLogo} size="sm" />
                <LogoLink label="Sulu" url="https://sulu.io" Component={SuluLogo} size="sm" />
                <LogoLink label="Docker" url="https://www.docker.com" Component={DockerLogo} size="sm" />
                <LogoLink label="Redis" url="https://redis.com" Component={RedisLogo} size="sm" />
                <LogoLink label="Elasticsearch" url="https://www.elastic.co" Component={ElasticsearchLogo} size="sm" />
            </div>
        </Section>
    );
}
