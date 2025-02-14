# webpack 多配置文件

> 为什么要写多个 webpack 配置文件?
- development(开发环境) 和 production(生产环境) 这两个环境下的构建目标存在着巨大差异 所以 webpack 的配置写的差距会非常的大。
- 在开发环境中，我们需要：强大的 source map 和一个有着 live reloading(实时重新加载) 或 hot module replacement(热模块替换) 能力的 localhost server。
- 而生产环境目标则转移至其他方面，关注点在于压缩 bundle、更轻量的 source map、资源优化等，通过这些优化方式改善加载时间。由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置。
- 虽然，以上我们将 生产环境 和 开发环境 做了细微区分，但是，请注意，我们还是会遵循不重复写配置的原则，保留一个 "common( 公共 )" 配置。为了将这些配置合并在一起，我们将使用一个名为 webpack-merge 的工具。此工具会引用 "common" 配置，因此我们不必再在环境特定 env 的配置中编写重复代码。

> 生产环境和开发环境存在相同的配置如何解决？
- 我们可以在写一个公共的配置文件，例如 webpack.common.js，然后里用 webpack-merge 将公共的配置合并到其他配置中。