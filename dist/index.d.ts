import { Resolver } from "@lumeweb/resolver-module-eip137-common";
import { DNSResult, ResolverOptions } from "@lumeweb/libresolver";
export default class Eip137 extends Resolver {
  getSupportedTlds(): string[];
  resolve(
    domain: string,
    options: ResolverOptions,
    bypassCache: boolean
  ): Promise<DNSResult>;
  protected getChain(options: ResolverOptions): string;
}
