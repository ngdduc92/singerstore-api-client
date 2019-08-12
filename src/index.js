import ApiClient from './restClient';
import PublicClient from './publicClient';
import ProductCategories from './api/productCategories';
import Products from './api/products/products';
import ProductOptions from './api/products/options';
import ProductOptionValues from './api/products/optionValues';
import ProductVariants from './api/products/variants';
import ProductImages from './api/products/images';
import Sitemap from './api/sitemap';
import ThemeSettings from './api/theme/settings';
import ThemeAssets from './api/theme/assets';
import ThemePlaceholders from './api/theme/placeholders';
import CustomerGroups from './api/customerGroups';
import Customers from './api/customers';
import Orders from './api/orders/orders';
import OrderDiscounts from './api/orders/discounts';
import OrderTransactions from './api/orders/transactions';
import OrderItems from './api/orders/items';
import OrderStatuses from './api/orders/statuses';
import ShippingMethods from './api/shippingMethods';
import PaymentMethods from './api/paymentMethods';
import PaymentGateways from './api/paymentGateways';
import Countries from './api/countries';
import Currencies from './api/currencies';
import Text from './api/text';
import Settings from './api/settings';
import Pages from './api/pages';
import Redirects from './api/redirects';
import Webhooks from './api/webhooks';
import Tenants from './api/tenants/tenants';
import Users from './api/users/users';
import Discounts from './api/discounts';
import DiscountTypes from './api/discountTypes';
import Cart from './api/cart/cart';
import Public from './api/public/public';
import PublicProducts from './api/public/products';
import PublicPages from './api/public/pages';
import PublicSitemap from './api/public/sitemap';
import PublicThemeSettings from './api/public/themeSettings';
import PublicProductCategories from './api/public/productCategories';
import PublicSettings from './api/public/settings';
import PublicThemePlaceholders from './api/public/themePlaceHolders';
import PublicRedirects from './api/public/redirect';
import PublicCart from './api/public/cart';
import ApiKeys from './api/security/securityKeys';

export default class Client {
	constructor(options = {}) {
		this.apiBaseUrl = options.apiBaseUrl || '/api';
		this.apiKey = options.apiKey;
		this.tenantId = options.tenantId;
		this.token = options.token;

		const apiClient = new ApiClient({
			baseUrl: this.apiBaseUrl,
			apiKey: this.apiKey,
			token: this.token,
			tenantId: this.tenantId
		});
		const publicClient = new PublicClient({
			baseUrl: this.apiBaseUrl,
			apiKey: this.apiKey,
			tenantId: this.tenantId
		});

		this.apiClient = apiClient;
		this.publicClient = publicClient;
		this.products = new Products(apiClient);
		this.products.options = new ProductOptions(apiClient);
		this.products.options.values = new ProductOptionValues(apiClient);
		this.products.variants = new ProductVariants(apiClient);
		this.products.images = new ProductImages(apiClient);
		this.productCategories = new ProductCategories(apiClient);
		this.customers = new Customers(apiClient);
		this.orders = new Orders(apiClient);
		this.orders.discounts = new OrderDiscounts(apiClient);
		this.orders.transactions = new OrderTransactions(apiClient);
		this.orders.items = new OrderItems(apiClient);
		this.orderStatuses = new OrderStatuses(apiClient);
		this.shippingMethods = new ShippingMethods(apiClient);
		this.paymentMethods = new PaymentMethods(apiClient);
		this.paymentGateways = new PaymentGateways(apiClient);
		this.customerGroups = new CustomerGroups(apiClient);
		this.sitemap = new Sitemap(apiClient);
		this.theme = {};
		this.theme.settings = new ThemeSettings(apiClient);
		this.theme.assets = new ThemeAssets(apiClient);
		this.theme.placeholders = new ThemePlaceholders(apiClient);
		this.countries = new Countries(apiClient);
		this.currencies = new Currencies(apiClient);
		this.text = new Text(apiClient);
		this.settings = new Settings(apiClient);
		this.pages = new Pages(apiClient);
		this.redirects = new Redirects(apiClient);
		this.webhooks = new Webhooks(apiClient);
		this.tenants = new Tenants(apiClient);
		this.users = new Users(apiClient);
		this.discounts = new Discounts(apiClient);
		this.discountTypes = new DiscountTypes(apiClient);
		this.cart = new Cart(apiClient);
		this.apiKeys = new ApiKeys(apiClient);

		this.public = new Public(publicClient);
		this.public.products = new PublicProducts(publicClient);
		this.public.pages = new PublicPages(publicClient);
		this.public.sitemap = new PublicSitemap(publicClient);
		this.public.theme = {};
		this.public.theme.settings = new PublicThemeSettings(publicClient);
		this.public.theme.placeholders = new PublicThemePlaceholders(publicClient);
		this.public.productCategories = new PublicProductCategories(publicClient);
		this.public.settings = new PublicSettings(publicClient);
		this.public.redirects = new PublicRedirects(publicClient);
		this.public.cart = new PublicCart(publicClient);
	}

	setTenantId(tenantId) {
		this.tenantId = tenantId;
		this.apiClient.tenantId = tenantId;
		this.publicClient.tenantId = tenantId;
	}

	setToken(token) {
		this.token = token;
		this.apiClient.token = token;
	}
}
